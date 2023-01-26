import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
export default function Cards() {
  return (
    <div className="my-10 w-full">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Featured post
                </Typography>
                <Typography
                  sx={{ marginTop: 1 }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Nov 12
                </Typography>
                <Typography sx={{ marginTop: 1, marginBottom: 4 }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Typography>
                <Link href="#" underline="none">
                  Continue reading...
                </Link>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://source.unsplash.com/random"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Post title
                </Typography>
                <Typography
                  sx={{ marginTop: 1 }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Nov 11
                </Typography>
                <Typography sx={{ marginTop: 1, marginBottom: 4 }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Typography>
                <Link href="#" underline="none">
                  Continue reading...
                </Link>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://source.unsplash.com/random"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
