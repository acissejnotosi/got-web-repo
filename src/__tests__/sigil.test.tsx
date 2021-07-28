import { expect, test } from '@jest/globals'
import { Sigil } from '../components/sigil'
import houseAlgoodSigil from './images/house-algood.png'
import { fireEvent, render } from '@testing-library/react'

test('Sigil component renders button with house name and span with house name', async () => {
  const houseName = 'House Algood'

  const houseSigil = {
    url: 'https://www.anapioficeandfire.com/api/houses/1',
    position: {
      top: '800px',
      left: '400px'
    },
    image: houseAlgoodSigil
  }

  let clicked = false

  const mockhandleSideContainer = jest.fn(() => {
    return (clicked = true)
  })

  const gotMap = render(
    <Sigil
      houseName={houseName}
      houseSigil={houseSigil}
      handleSideContainer={mockhandleSideContainer}
    />
  )

  const buttonSigil = await gotMap.findByTestId('button-sigil')
  expect(buttonSigil).toHaveProperty('value', houseName)

  const houseNameElement = await gotMap.findByTestId('house-name')
  expect(houseNameElement.textContent).toContain(houseName)
})

test('When click on Sigil button it opens side container', async () => {
  const houseName = 'House Algood'

  const houseSigil = {
    url: 'https://www.anapioficeandfire.com/api/houses/1',
    position: {
      top: '800px',
      left: '400px'
    },
    image: houseAlgoodSigil
  }

  let clicked = false

  const mockhandleSideContainer = jest.fn(() => {
    return (clicked = true)
  })

  const gotMap = render(
    <Sigil
      houseName={houseName}
      houseSigil={houseSigil}
      handleSideContainer={mockhandleSideContainer}
    />
  )

  const buttonSigil = await gotMap.findByTestId('button-sigil')

  fireEvent.click(buttonSigil)

  expect(mockhandleSideContainer).toHaveBeenCalledTimes(1)
})
