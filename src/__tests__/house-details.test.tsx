import { expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'
import { HouseDetails } from '../components/house-details'
import { House } from '../types'

test('renders correctly with one house', () => {
  const house: House = {
    url: 'https://anapioficeandfire.com/api/houses/1',
    name: 'House Algood',
    region: 'The Westerlands',
    coatOfArms:
      'A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)',
    words: '',
    titles: [''],
    seats: [''],
    currentLord: '',
    heir: '',
    overlord: 'https://anapioficeandfire.com/api/houses/229',
    founded: '',
    founder: '',
    diedOut: '',
    ancestralWeapons: [''],
    cadetBranches: [],
    swornMembers: []
  }
  const tree = create(<HouseDetails houseDetails={house} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders correctly with list inside house details', () => {
  const house: House = {
    url: 'https://www.anapioficeandfire.com/api/houses/2',
    name: 'House Allyrion of Godsgrace',
    region: 'Dorne',
    coatOfArms: 'Gyronny Gules and Sable, a hand couped Or',
    words: 'No Foe May Pass',
    titles: [''],
    seats: ['Godsgrace'],
    currentLord: 'https://www.anapioficeandfire.com/api/characters/298',
    heir: 'https://www.anapioficeandfire.com/api/characters/1922',
    overlord: 'https://www.anapioficeandfire.com/api/houses/285',
    founded: '',
    founder: '',
    diedOut: '',
    ancestralWeapons: [''],
    cadetBranches: [],
    swornMembers: [
      'https://www.anapioficeandfire.com/api/characters/298',
      'https://www.anapioficeandfire.com/api/characters/1129',
      'https://www.anapioficeandfire.com/api/characters/1301',
      'https://www.anapioficeandfire.com/api/characters/1922'
    ]
  }
  const tree = create(<HouseDetails houseDetails={house} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders correctly with no house details', () => {
  const house: House = {
    url: '',
    name: '',
    region: '',
    coatOfArms: '',
    words: '',
    titles: [''],
    seats: [''],
    currentLord: '',
    heir: '',
    overlord: '',
    founded: '',
    founder: '',
    diedOut: '',
    ancestralWeapons: [''],
    cadetBranches: [],
    swornMembers: []
  }
  const tree = create(<HouseDetails houseDetails={house} />).toJSON()
  expect(tree).toMatchSnapshot()
})
