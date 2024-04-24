export interface IAccess {
  id: number;
  sample: string;
  species: string;
  variety: string;
  country: string;
  color: string;
  generation: string;
  producer_name: string;
  coordinates: string;
  location: string;
  phone: string;
  collection_date: Date;
  observation: string;
  created_by: Partial<IUser>;
  owner: Partial<IUser>;
  public: number;
}

export interface ISeedlingPhase {
  access_id: number;
  cod1: number;
  cod2: number;
  cod3: number;
  cod4: number;
  cod5: number;
  cod6: number;
}

export interface IVegetativePhase {
  access_id: number;
  cod7: number;
  cod8: number;
  cod9: number;
  cod10: number;
  cod11: number;
  cod12: number;
  cod13: number;
  cod14: number;
  cod15: number;
  cod16: number;
  cod17: number;
  cod18: number;
  cod19: number;
  cod20: number;
  cod21: number;
  cod22: number;
  cod23: number;
  cod24: number;
  cod25: number;
}

export interface IReproductivePhase {
  access_id: number;
  cod26: number;
  cod27: number;
  cod28: number;
  cod29: number;
  cod30: number;
  cod31: number;
  cod32: number;
  cod33: number;
  cod34: number;
  cod35: number;
  cod36: number;
  cod37: number;
  cod38: number;
  cod39: number;
  cod40: number;
  cod41: number;
  cod42: number;
  cod43: number;
  cod44: number;
  cod45: number;
  cod46: number;
  cod47: number;
  cod48: number;
  cod49: number;
  cod50: number;
  cod51: number;
  cod52: number;
  cod53: number;
  cod54: number;
  cod55: number;
  cod56: number;
  cod57: number;
  cod58: number;
  cod59: number;
  cod60: number;
  cod61: number;
  cod62: number;
  cod63: number;
  cod64: number;
  cod65: number;
  cod66: number;
  cod67: number;
  cod68: number;
  cod69: number;
  cod70: number;
}

export interface IAccessImage {
  id: number;
  name: string;
  access_id: number;
}

export interface IBanner {
  id: number;
  image_name: string;
  title: string;
  description: string;
}

type Role = "Student" | "Teacher" | "Researcher" | "Admin";

export interface IUser {
  id: number;
  name: string | null;
  email: string;
  city: string | null;
  country: string | null;
  state: string | null;
  password: string;
  location: string | null;
  role: Role;
  parent_id: number | null;
}

export interface ILog {
  id: number;
  user: IUser;
  action_type: string;
  timestamp: Date;
  description: string;
}

export interface IAccessForm {
  sample: string;
  species: string;
  variety: string;
  color: string;
  generation: string;
  producer_name: string;
  coordinates: string;
  location: string;
  phone: string;
  collection_date: string;
  observation: string;
  cod1: number | null;
  cod2: number | null;
  cod3: number | null;
  cod4: number | null;
  cod5: number | null;
  cod6: number | null;
  cod7: number | null;
  cod8: number | null;
  cod9: number | null;
  cod10: number | null;
  cod11: number | null;
  cod12: number | null;
  cod13: number | null;
  cod14: number | null;
  cod15: number | null;
  cod16: number | null;
  cod17: number | null;
  cod18: number | null;
  cod19: number | null;
  cod20: number | null;
  cod21: number | null;
  cod22: number | null;
  cod23: number | null;
  cod24: number | null;
  cod25: number | null;
  cod26: number | null;
  cod27: number | null;
  cod28: number | null;
  cod29: number | null;
  cod30: number | null;
  cod31: number | null;
  cod32: number | null;
  cod33: number | null;
  cod34: number | null;
  cod35: number | null;
  cod36: number | null;
  cod37: number | null;
  cod38: number | null;
  cod39: number | null;
  cod40: number | null;
  cod41: number | null;
  cod42: number | null;
  cod43: number | null;
  cod44: number | null;
  cod45: number | null;
  cod46: number | null;
  cod47: number | null;
  cod48: number | null;
  cod49: number | null;
  cod50: number | null;
  cod51: number | null;
  cod52: number | null;
  cod53: number | null;
  cod54: number | null;
  cod55: number | null;
  cod56: number | null;
  cod57: number | null;
  cod58: number | null;
  cod59: number | null;
  cod60: number | null;
  cod61: number | null;
  cod62: number | null;
  cod63: number | null;
  cod64: number | null;
  cod65: number | null;
  cod66: number | null;
  cod67: number | null;
  cod68: number | null;
  cod69: number | null;
  cod70: number | null;
  images: string[];
}

export interface IAccessFormProps {
  data: IAccessForm;
  setData: ((data: IAccessForm) => void) &
    ((data: (previousData: IAccessForm) => IAccessForm) => void) &
    (<K extends keyof IAccessForm>(key: K, value: IAccessForm[K]) => void);
  errors: Partial<Record<keyof IAccessForm, string>>;
}

export interface IUserForm {
  name: string | null;
  email: string;
  city: string | null;
  country: string | null;
  state: string | null;
  password: string;
  password_confirmation: string;
  location: string | null;
  role: Role;
  parent: IUser | null;
  parent_id: number | null;
}

export interface IContactForm {
  name: string;
  email: string;
  cpf: string | null;
  phone: string | null;
  address: string | null;
  institution: string | null;
  message: string;
}

export type IPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user?: IUser;
  };
};

export type IProtectedPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: IUser;
  };
};

export type IPaginatedData<T> = {
  current_page: number;
  data: T;
  from: number;
  to: number;
  total: number;
  last_page: number;
  first_page_url: string;
  prev_page_url: string;
  next_page_url: string;
  last_page_url: string;
};
