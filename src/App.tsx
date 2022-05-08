import { useState, ChangeEventHandler } from 'react'
import Blocks, { MAX_AGE } from './Blocks'

const App = () => {
  const [age, setAge] = useState(0)
  const [maxAge, setMaxAge] = useState(90)

  const handleChange = (
    setter: (i: number) => void
  ): ChangeEventHandler<HTMLInputElement> => {
    return (e) => {
      const val = e.target.value
      if (val) {
        setter(parseInt(val))
      }
    }
  }

  return (
    <>
      <div className={'w-full h-screen'}>
        <div className={'navbar'}>
          <h1 className={'text-2xl font-semibold uppercase'}>4680 Blocks</h1>
        </div>
        <div className={'flex flex-row h-5/6'}>
          <div className={'mx-8 mt-2 w-1/3'}>
            <div className={'card card-bordered w-full min-w-min max-w-screen-md'}>
              <div className={'card-body'}>
                <h2 className={'card-title'}>Input</h2>
                <div className={'form-control'}>
                  <label className={'label'} htmlFor={'age'}>
                    <span className={'label-text'}>Age</span>
                  </label>
                  <input
                    className={'input input-bordered'}
                    id={'age'}
                    placeholder={'Enter your age'}
                    type={'number'}
                    value={age}
                    max={MAX_AGE}
                    min={1}
                    onChange={handleChange(setAge)}
                  />
                </div>

                <div className={'form-control'}>
                  <label className={'label'} htmlFor={'maxAge'}>
                    <span className={'label-text'}>Max age</span>
                  </label>
                  <input
                    className={'input input-bordered'}
                    id={'maxAge'}
                    placeholder={'Enter max age'}
                    type={'number'}
                    value={maxAge}
                    max={MAX_AGE}
                    min={1}
                    onChange={handleChange(setMaxAge)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Blocks maxAge={maxAge} age={age} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
