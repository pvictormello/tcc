import { useForm } from "@inertiajs/react";

export interface Access {
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
}

export interface Banner {
  id: number;
  image_name: string;
  title: string;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  country: string;
  state: string;
  password: string;
  location: string;
  role_id: number;
  parent_id: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user?: User;
  };
};

export interface AccessForm {
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
  cod1: number;
  cod2: number;
  cod3: number;
  cod4: number;
  cod5: number;
  cod6: number;
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
  images: any[];
}

export interface AccessFormProps {
  data: AccessForm;
  setData: ((data: AccessForm) => void) &
    ((data: (previousData: AccessForm) => AccessForm) => void) &
    (<K extends keyof AccessForm>(key: K, value: AccessForm[K]) => void);
  errors: Partial<Record<keyof AccessForm, string>>;
}
