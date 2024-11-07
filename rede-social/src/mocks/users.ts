export type UserType = {
  id: number,
  name: string,
  photo: string | null,
  age: number,
  country: string,
  city: string,
}

export type AddUserType = {
  name: string,
  photo: File | null,
  age: number,
  country: string,
  city: string,
}

export const users: UserType[] = [
  { 
    id: 1,
    name: 'Alice',
    photo: null,
    age: 36,
    city: 'Washington',
    country: 'United States',
  },
  { id: 2,
    name: 'Bob',
    photo: null,
    age: 28,
    city: 'New York',
    country: 'United States',
  },
  { id: 3,
    name: 'Charlie',
    photo: '/person1.png',
    age: 32,
    city: 'Massachusetts',
    country: 'United States',
  }
];