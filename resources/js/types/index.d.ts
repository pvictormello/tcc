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
  collection_date: string;
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
  name: string | undefined;
  email: string;
  city: string | undefined;
  country: string | undefined;
  state: string | undefined;
  password: string;
  location: string | undefined;
  role: Role;
  parent_id: number | undefined;
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
  cod1: number | undefined;
  cod2: number | undefined;
  cod3: number | undefined;
  cod4: number | undefined;
  cod5: number | undefined;
  cod6: number | undefined;
  cod7: number | undefined;
  cod8: number | undefined;
  cod9: number | undefined;
  cod10: number | undefined;
  cod11: number | undefined;
  cod12: number | undefined;
  cod13: number | undefined;
  cod14: number | undefined;
  cod15: number | undefined;
  cod16: number | undefined;
  cod17: number | undefined;
  cod18: number | undefined;
  cod19: number | undefined;
  cod20: number | undefined;
  cod21: number | undefined;
  cod22: number | undefined;
  cod23: number | undefined;
  cod24: number | undefined;
  cod25: number | undefined;
  cod26: number | undefined;
  cod27: number | undefined;
  cod28: number | undefined;
  cod29: number | undefined;
  cod30: number | undefined;
  cod31: number | undefined;
  cod32: number | undefined;
  cod33: number | undefined;
  cod34: number | undefined;
  cod35: number | undefined;
  cod36: number | undefined;
  cod37: number | undefined;
  cod38: number | undefined;
  cod39: number | undefined;
  cod40: number | undefined;
  cod41: number | undefined;
  cod42: number | undefined;
  cod43: number | undefined;
  cod44: number | undefined;
  cod45: number | undefined;
  cod46: number | undefined;
  cod47: number | undefined;
  cod48: number | undefined;
  cod49: number | undefined;
  cod50: number | undefined;
  cod51: number | undefined;
  cod52: number | undefined;
  cod53: number | undefined;
  cod54: number | undefined;
  cod55: number | undefined;
  cod56: number | undefined;
  cod57: number | undefined;
  cod58: number | undefined;
  cod59: number | undefined;
  cod60: number | undefined;
  cod61: number | undefined;
  cod62: number | undefined;
  cod63: number | undefined;
  cod64: number | undefined;
  cod65: number | undefined;
  cod66: number | undefined;
  cod67: number | undefined;
  cod68: number | undefined;
  cod69: number | undefined;
  cod70: number | undefined;
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
  name: string | undefined;
  email: string;
  city: string | undefined;
  country: string | undefined;
  state: string | undefined;
  password: string;
  password_confirmation: string;
  location: string | undefined;
  role: Role;
  parent: IUser | undefined;
  parent_id: number | undefined;
}

export interface IContactForm {
  name: string;
  email: string;
  cpf: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  institution: string | undefined;
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
