import {
  format,
  formatDistanceToNow as dateFnsFortmatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawdate: string): string {
  const date = new Date(rawdate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}
// console.log(new Date().toISOString());

export function formatDistanceToNow(rawdate: string): string {
  const date = new Date(rawdate);
  return dateFnsFortmatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

const rawDate = '2025-06-27T01:03:27.626Z';
console.log(rawDate);
console.log(formatDistanceToNow(rawDate));
