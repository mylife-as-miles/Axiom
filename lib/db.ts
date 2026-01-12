import Dexie, { type EntityTable } from 'dexie';

interface User {
  id: number;
  email: string;
  passwordHash: string;
  name: string;
  createdAt: Date;
}

const db = new Dexie('AxiomDatabase') as Dexie & {
  users: EntityTable<User, 'id'>;
};

// Schema declaration:
db.version(1).stores({
  users: '++id, &email, name, createdAt' // primary key "id" (for the runtime!), indexes "email" (unique)
});

export type { User };
export { db };
