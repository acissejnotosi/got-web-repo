import { SigilProps } from '../types'

export const Sigil = ({
  handleSideContainer,
  houseSigil,
  houseName
}: SigilProps): JSX.Element => (
  <div
    className='sigil-container'
    style={{
      top: houseSigil?.position.top,
      left: houseSigil?.position.left
    }}
  >
    <button
      aria-label='Sigil button'
      type='button'
      className='button-sigil'
      data-testid='button-sigil'
      value={houseName}
      onClick={e => handleSideContainer(e)}
      style={{
        backgroundImage: `url(${houseSigil?.image})`
      }}
    />
    <span className='house-name' data-testid='house-name'>
      {houseName}
    </span>
  </div>
)
