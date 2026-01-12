import { db, User } from './db';

// Simple SHA-256 hash using Web Crypto API
async function hashPassword(password: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export async function registerUser(email: string, password: string, name: string): Promise<User> {
  // Check if user already exists
  const existingUser = await db.users.where('email').equals(email).first();
  if (existingUser) {
    throw new Error('User with this email already exists.');
  }

  const passwordHash = await hashPassword(password);
  const id = await db.users.add({
    email,
    passwordHash,
    name,
    createdAt: new Date()
  });

  return {
    id,
    email,
    passwordHash,
    name,
    createdAt: new Date()
  };
}

export async function authenticateUser(email: string, password: string): Promise<User> {
  const user = await db.users.where('email').equals(email).first();
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  const passwordHash = await hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    throw new Error('Invalid email or password.');
  }

  return user;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  return await db.users.where('email').equals(email).first();
}

export async function resetPassword(email: string, newPassword: string): Promise<void> {
  const user = await db.users.where('email').equals(email).first();
  if (!user) {
    throw new Error('User not found.');
  }

  const passwordHash = await hashPassword(newPassword);
  await db.users.update(user.id, { passwordHash });
}
