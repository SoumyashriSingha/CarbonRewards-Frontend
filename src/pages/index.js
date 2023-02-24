import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Co2_Value} from '../components/dashboard/co2_value';
import { PointsHistory } from '../components/dashboard/pointshistory';
import { ExtraAddOns} from '../components/dashboard/extraaddons';
import { LiveData } from '../components/dashboard/livedata';
import { Score } from '../components/dashboard/score';
import { Connections } from '../components/dashboard/connections';
import { QA } from '../components/dashboard/questions_answers';
import { PieChart} from '../components/dashboard/piechart';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Carbon Rewards
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Co2_Value />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Connections />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Score />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <QA sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LiveData />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <PieChart sx={{ height: '100%' }} />
          </Grid>
          
          <Grid
            item
            lg={8}

            md={12}
            xl={9}
            xs={12}
          >
            <PointsHistory />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
