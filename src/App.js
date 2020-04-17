import React from 'react';
import CobaltRoot, {Page, Header, H1, H2, Grid, Card, Paragraph} from 'cobalt-react-components';
import { useTranslation } from "react-i18next";

export default function App() {

  return (
    <CobaltRoot>
      <AppContent />
    </CobaltRoot>
  )
}

function AppContent() {
  return (
    <Page>
      <AppHeader />
      <Page.Content>
        <Grid pushCenter fullHeight>
          <Grid.Group>
            <Grid.Column all='100'>
              <Content />
            </Grid.Column>
          </Grid.Group>
        </Grid>
      </Page.Content>
    </Page>
  )
}

function AppHeader() {
  const [t] = useTranslation();

  return (
    <Header contained borderless>
      <Header.Heading>
        <Header.Title>
          <H1>
            {t('atlasConnected')}
          </H1>
        </Header.Title>
      </Header.Heading>
    </Header>
  )
}

function Content() {
  return (
    <Card>
      <Header borderless>
        <Header.Heading>
          <Header.Title>
            <H2>Hello Spider</H2>
          </Header.Title>
        </Header.Heading>
      </Header>
      <Card.Content pushContent>
        <Paragraph>Coming soon™</Paragraph>
      </Card.Content>
    </Card>
  )
}
