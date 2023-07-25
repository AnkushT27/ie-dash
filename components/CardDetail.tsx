"use client";
import { Card, Grid, Text, Link, Spacer, Divider } from "@nextui-org/react";

export default function CardDetail() {
  return (
    <div>
    <Card css={{ p: "$10", h: "400px", mw: "430px", mb: "100px"}}>
        <Text b className="justify-start">Axis Bank</Text>
    <Divider css={{ mt: "15px", width: "100%"}} ></Divider>
      <Card.Header>
        <img
          alt="nextui logo"
          src={`/images/axis.png`}
          width="150px"
          height="150px"
        />
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
      <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={5}>
            <Text b h4 css={{ lineHeight: "$xs" }}>
              Successfully agg accounts
            </Text>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Text b h4 css={{ lineHeight: "$xs" }}>
              Failed Accounts
            </Text>
          </Grid>
          <Grid xs={5}>
          <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          0-24
        </Link>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
          <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          2-5
        </Link>
          </Grid>
          <Grid xs={12}>
          <Spacer y={2} />
          </Grid>
          <Grid xs={5}>
            <Text h4 b css={{ lineHeight: "$xs" }}>
             960 Accounts
            </Text>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Text h4 b css={{ lineHeight: "$xs" }}>
             961 Accounts
            </Text>
          </Grid>
          <Grid xs={5}>
          <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          23
        </Link>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
          <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          11
        </Link>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
    </div>
  );
}
