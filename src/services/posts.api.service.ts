const baseUrl =  import.meta.env.BASE_URL;

export const getPosts = async () => await fetch(`${baseUrl}/posts`, {}).then((res) => res.json());