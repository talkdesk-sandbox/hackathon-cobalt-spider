import React from 'react'
import { Avatar, Brand, Dock, Image, H1, BadgeWrapper, Chip, Icon } from 'cobalt-react-components'

const demoApps = [
  {
    name: 'Home',
    icon: 'HOME',
    active: false
  },
  {
    name: 'Calendar',
    icon: 'CONTACT_CALENDAR',
    active: false,
    nav: [
      {
        label: 'Drawer 1',
        active: false
      },
      {
        label: 'Drawer 2',
        active: true
      },
      {
        label: 'Drawer 3',
        active: false
      }
    ]
  },
  {
    name: 'List',
    icon: 'LIST',
    active: false,
    nav: [
      {
        label: 'Drawer 1',
        active: true
      },
      {
        label: 'Drawer 2',
        active: false
      },
      {
        label: 'Drawer 3',
        active: false
      },
      {
        label: 'Drawer 4',
        active: false
      }
    ]
  },
  {
    name: 'Settings',
    active: false,
    icon: 'SETTINGS_OVERSCAN'
  }
]

const Atlas = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'max-content auto', height: 'inherit', overflow: 'hidden' }}>
    <Dock hasDrawer={false} drawerOpen={false}>
      <Dock.Bar>
        <Dock.Container>
          <Brand>
            <Image
              src='https://qa-cdn-talkdesk.talkdeskdev.com/main-ui/latest/assets/resources/td-icon-white.svg'
              alt='TD Logo'
              width={28}
              height={30}
            />
          </Brand>
        </Dock.Container>
        <Dock.Container>
        <BadgeWrapper>
          <Avatar small>
            <Icon name={Icon.USER} />
          </Avatar>
          <Chip alternate small position={Chip.POSITION_BOTTOM_CENTER}>00:23</Chip>
        </BadgeWrapper>
          <Dock.Button>
            <Icon name={Icon.ADD_CALL} small />
          </Dock.Button>
        </Dock.Container>
        <Dock.Divider />
        <Dock.Container maximal>
          <Dock.Nav>
            <Dock.Button
              onClick={() => { }}>
              <Icon name={Icon.HOME} />
            </Dock.Button>
            <Dock.Button
              onClick={() => { }}>
              <Icon name={Icon.CONTACT_CALENDAR} />
            </Dock.Button>
            <Dock.Button
              onClick={() => { }}>
              <Icon name={Icon.LIST} />
            </Dock.Button>
            <Dock.Button
              active
              onClick={() => { }}>
              <img src='https://svgur.com/i/EBd.svg' width='24' height='24' alt='spider' />
            </Dock.Button>
          </Dock.Nav>
        </Dock.Container>
        <Dock.Divider />
        <Dock.Container>
        <BadgeWrapper>
          <Dock.Button>
            <Icon name={Icon.NOTIFICATIONS} small />
          </Dock.Button>
          <Chip alternate danger small position={Chip.POSITION_TOP_RIGHT}>3</Chip>
        </BadgeWrapper>
        <Avatar success small >
            <Icon name={Icon.USER} />
          </Avatar>
          <Chip alternate small>14:19</Chip>
        </Dock.Container>
      </Dock.Bar>
    </Dock>
    <div>
      {children}
    </div>
  </div>
)

export default Atlas
