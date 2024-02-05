import { parseISO, format } from 'date-fns'
import ja from 'date-fns/local/ja'

const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年mm月dd日', {
        locale: ja
      })}
    </time>
  )
}
export default ConvertDate
