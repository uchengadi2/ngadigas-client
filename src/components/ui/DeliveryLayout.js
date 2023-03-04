import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "../../history";
import CountryLayout from "./CountryLayout";
import StateLayout from "./StateLayout";
import CurrencyLayout from "./CurrencyLayout";
import ClustersLayout from "./ClustersLayout";
import ProductList from "./../products/ProductList";
import ProductFormContainer from "./../products/ProductFormContainer";
import AllProductsLayout from "./AllProductsLayout";
import RelatedProductLayout from "./RelatedProductLayout";
import ProductsOnSaleLayout from "./ProductsOnSaleLayout";
import VendorParnerLayout from "./VendorPartnerLayout";
import LogisticsPartnerLayout from "./LogisticsPartnerLayout";
import OnTransitDeliveryLayout from "./OnTransitDeliveryLayout";
import CompletedDeliveryLayout from "./CompletedDeliveryLayout";
import ReturnedDeliveryLayout from "./ReturnedDeliveryLayout";
import AssignedDeliveryLayout from "./AssignedDeliveriesLayout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      //to={route.link}
      //label={route.name}
      onClick={(event) => {
        event.preventDefault();
        history.push(`/partners`);
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    //height: 180,
    marginTop: "-50px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function DeliveryLayout({ token, userId, vendorId, roleId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label="Assign Deliveries"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/deliveries/assigned`);
          }}
        />
        <Tab
          label="OnTransit Deliveries"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/deliveries/ontransit`);
          }}
        />
        <Tab
          label="Completed Deliveries"
          {...a11yProps(1)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/deliveries/fullfilled`);
          }}
        />

        <Tab
          label="Returned Deliveries"
          {...a11yProps(3)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/deliveries/returned`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AssignedDeliveryLayout
          token={token}
          userId={userId}
          vendorId={vendorId}
          roleId={roleId}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OnTransitDeliveryLayout
          token={token}
          userId={userId}
          vendorId={vendorId}
          roleId={roleId}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompletedDeliveryLayout
          token={token}
          userId={userId}
          vendorId={vendorId}
          roleId={roleId}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReturnedDeliveryLayout
          token={token}
          userId={userId}
          vendorId={vendorId}
          roleId={roleId}
        />
      </TabPanel>

      {/* <TabPanel value={value} index={3}>
        <ClustersLayout token={token} userId={userId} />
      </TabPanel> */}
    </div>
  );
}

export default DeliveryLayout;
