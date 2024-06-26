import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Home DNS">
            <Container>
                <Title>
                    Raspberry Pi <Badge>2022 - present</Badge>
                </Title>
                <P>
                Raspberry Pi is configured to be a home DNS server with Pi-Hole installed. 
                The goal was to create a home domain to monitor network traffic and queries locally and remotely. 
                Includes a Pi-VPN installation acting as a secure tunnel home to maintain network traffic 
                and provide remote access to machines in the private network from the public.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://pi-hole.net/">
                        https://pi-hole.net/
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Raspberry Pi OS Lite</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Debian Linux distribution/Command Line/Domain Name System (DNS)/ Virtual Private Network (VPN)</span>
                    </ListItem>
                    <WorkImage src="/images/projects/raspi_01.png" alt="raspi"></WorkImage>                   
                    <WorkImage src="/images/projects/raspi.png" alt="dashboard"></WorkImage>                   
                </List>
            </Container>
        </Layout>
    )
}

export default Work