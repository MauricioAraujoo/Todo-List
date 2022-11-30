/**
 * Um Item é um objeto com um id, nome e propriedade done.
 * @property {number} id - O identificador exclusivo do item.
 * @property {string} name - O nome do item.
 * @property {boolean} concluído - booleano;
 */
export type Item = {
    id: number;
    name: string;
    done: boolean;
}