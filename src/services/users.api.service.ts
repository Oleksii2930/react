const baseUrl =  import.meta.env.BASE_URL;

export const getUsers = async () => await fetch(`${baseUrl}/users`, {}).then((res) => res.json());