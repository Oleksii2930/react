export  const retriveLocalStorege=<T> (key:string) => {
    const object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse;
}

//бере значення з localStorage по ключу
//
// якщо нічого не знайдено — повертає порожній об’єкт типу T
//
// якщо знайдено — розпарсює JSON і повертає отриманий об’єкт