
import { Book, tag } from '../types'
import Link from 'next/link'
export const BookElem = ({ name, hash, path }: Book) => (
    <p><a href={"https://ipfs.io/ipfs/" + hash} >{name}</a></p>
);
export const TagElem = ({ path }: tag) => (
    <p><Link href={'/tag/' + path.replace('/', '&')} >{path} </Link></p>
);