export type Employee = {
  id: number;
  name: string;
  imageUrl: string;
  role?: string;
  longDescription: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Bunyol Mica de Sucre',
    imageUrl: 'https://picsum.photos/id/237/300/',
    role: 'Full Stack Developer',
    longDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius!"
  },
  {
    id: 2,
    name: 'Oscarolo Benavente Jauri',
    imageUrl: 'https://picsum.photos/id/1025/300',
    longDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius!"
  },
  {
    id: 3,
    name: 'Ignacio Cabañuelas Tributos',
    imageUrl: 'https://picsum.photos/id/1074/300',
    role: 'Director General de Sedentarismo',
    longDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quod optio obcaecati possimus molestias illo aliquam aut, repudiandae sint reiciendis rem quae dicta eligendi nostrum maiores non soluta cum eius!"
  }
];

export default employees;