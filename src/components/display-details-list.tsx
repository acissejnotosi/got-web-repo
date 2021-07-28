import { DisplayDetailsListType } from '../types'

export const DisplayDetailsList = ({
  details,
  title
}: DisplayDetailsListType): JSX.Element => (
  <>
    {details?.toString() !== '' && (
      <>
        <h2>{title}</h2>
        <ul>
          {details?.map(detail => (
            <li key={detail.toString().concat('key')}>{detail}</li>
          ))}
        </ul>
      </>
    )}
  </>
)
