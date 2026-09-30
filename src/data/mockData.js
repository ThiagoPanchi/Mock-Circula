import organizationIcon from '../../png/001-organizacao.png'
import laborIcon from '../../png/002-mao-de-obra.png'
import electronicsIcon from '../../png/003-aparelhos-eletronicos.png'
import foodIcon from '../../png/004-alimentos.png'
import furnitureIcon from '../../png/005-moveis.png'
import appliancesIcon from '../../png/006-eletrodomesticos.png'
import clothingIcon from '../../png/007-vestimentos.png'
import otherIcon from '../../png/008-outros.png'
import donationItemsData from './donationItems.json'

export const CATEGORIES = [
  'Todos',
  'Alimentos',
  'Móveis',
  'Aparelhos eletrônicos',
  'Eletrodomésticos',
  'Vestimentos',
  'Mão de Obra',
  'Outros'
]

export const ITEM_CATEGORIES = CATEGORIES.filter((category) => category !== 'Todos')

export const CATEGORY_METADATA = {
  Todos: { label: 'Todos', icon: otherIcon, className: 'outros' },
  Alimentos: { label: 'Alimentos', icon: foodIcon, className: 'alimentos' },
  Móveis: { label: 'Móveis', icon: furnitureIcon, className: 'moveis' },
  'Aparelhos eletrônicos': { label: 'Aparelhos eletrônicos', icon: electronicsIcon, className: 'aparelhos-eletronicos' },
  Eletrodomésticos: { label: 'Eletrodomésticos', icon: appliancesIcon, className: 'eletrodomesticos' },
  Vestimentos: { label: 'Vestimentos', icon: clothingIcon, className: 'vestimentos' },
  'Mão de Obra': { label: 'Mão de Obra', icon: laborIcon, className: 'mao-de-obra' },
  Outros: { label: 'Outros', icon: otherIcon, className: 'outros' }
}

export const ORGANIZATION_METADATA = {
  label: 'Organização',
  icon: organizationIcon,
  className: 'organizacao'
}

export const LEGEND_ITEMS = [
  ORGANIZATION_METADATA,
  ...ITEM_CATEGORIES.map((category) => CATEGORY_METADATA[category])
]

export const donationItems = donationItemsData

export const organizations = [
  {
    id: 'rede-apoio-familias',
    name: 'Rede Apoio Famílias',
    description: 'Organização fictícia que acolhe famílias em vulnerabilidade social e organiza entregas solidárias.',
    audience: 'Famílias com crianças, idosos e pessoas em situação de emergência social.',
    page: 'https://exemplo.local/rede-apoio-familias',
    acceptedDonations: ['Alimentos', 'Vestimentos', 'Móveis'],
    locationName: 'Área aproximada de Coqueiros, Florianópolis',
    coordinates: [-27.6012, -48.5807],
    contact: 'redeapoio@exemplo.local'
  },
  {
    id: 'casa-comunitaria-continente',
    name: 'Casa Comunitária Continente',
    description: 'Instituição demonstrativa que recebe doações e redistribui itens conforme demandas locais.',
    audience: 'Moradores de comunidades do continente e associações parceiras.',
    page: 'https://exemplo.local/casa-comunitaria',
    acceptedDonations: ['Alimentos', 'Aparelhos eletrônicos', 'Outros'],
    locationName: 'Região aproximada de São José',
    coordinates: [-27.6138, -48.6371],
    contact: '(48) 90000-0003 fictício'
  },
  {
    id: 'associacao-reuso-solidario',
    name: 'Associação Reuso Solidário',
    description: 'Associação fictícia voltada para reaproveitamento de móveis, eletrodomésticos e itens de casa.',
    audience: 'Famílias reassentadas e projetos comunitários parceiros.',
    page: 'https://exemplo.local/reuso-solidario',
    acceptedDonations: ['Móveis', 'Aparelhos eletrônicos', 'Eletrodomésticos', 'Mão de Obra'],
    locationName: 'Região aproximada de Palhoça',
    coordinates: [-27.6452, -48.6922],
    contact: 'reuso@exemplo.local'
  }
]
