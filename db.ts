import Dexie, { type EntityTable } from 'dexie';

interface User {
  id?: number;
  name: string;
  role: string;
  step: 'profile' | 'final_activation' | 'complete';
  joinedAt: Date;
}

const db = new Dexie('AxiomDB') as Dexie & {
  user: EntityTable<User, 'id'>;
};

db.version(1).stores({
  user: '++id, name, role, step'
});

export { db };
