import moment from 'moment'
import { Fragment, useState } from 'react'

export interface BlockProps {
  age: number
  maxAge: number
}

export const MAX_AGE = 120

const Blocks = ({ age, maxAge }: BlockProps) => {
  if (maxAge > MAX_AGE) maxAge = MAX_AGE
  if (age > maxAge) age = maxAge

  const [weekOfYear] = useState(moment().week())

  return (
    <>
      <div className={'overflow-auto max-h-full p-2'}>
        {Array(maxAge)
          .fill(0)
          .map((_, line) => (
            <>
              {line < age ? (
                <Line len={52} />
              ) : (
                <>{line === age ? <Line len={weekOfYear} /> : <Line />}</>
              )}
            </>
          ))}
      </div>
    </>
  )
}

export interface LineProps {
  len?: number
}

const Line = ({ len }: LineProps) => {
  return (
    <>
      <div className={'flex flex-row'}>
        {Array(52)
          .fill(0)
          .map((_, col) => (
            <Fragment key={col}>
              {len && col < len ? (
                <div
                  className={
                    'h-3 w-3 bg-yellow-200 border border-gray-500'
                  }
                />
              ) : (
                <div className={'h-3 w-3 border border-gray-500'} />
              )}
            </Fragment>
          ))}
      </div>
    </>
  )
}

export default Blocks
