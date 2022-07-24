type RandomApiUser = {
id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  employment: RandomApiEmployment;
  address: RandomApiAddress;
}

type RandomApiEmployment = {
  title: string;
}

type RandomApiAddress = {
  city: string;
  state: string;
  country: string;
}