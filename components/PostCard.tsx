import { Card, Grid, Text, Link } from "@nextui-org/react";
export default function PostCard() {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        {/* <Image
      alt="nextui logo"
      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
      width="34"
      height="34"
    /> */}
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  )
}