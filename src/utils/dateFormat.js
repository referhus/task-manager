/* eslint-disable no-extra-boolean-cast */
export function dateFormat(dateStr) {
    const date = dateStr !== undefined ? new Date(dateStr) :  new Date();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${
        month[date.getMonth()]}, ${date.getFullYear()}`;
}
