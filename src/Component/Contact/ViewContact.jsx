import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CusLink from "../../Common/Link";
import { useCallback, useEffect, useState } from "react";
import { changePath } from "../../slices/ContactSlice";
import { amber, darkblue, liver } from "../../colors/color";
import { HeightCalculation } from "../../slices/UiSlice";
import { Email, Engineering, Group, Person, Phone } from "@mui/icons-material";

const ViewContact = () => {
  const { contactId } = useParams();
  const contact = useSelector((state) =>
    state.contacts.items.find((item) => item.id == contactId)
  );
  const group = useSelector((state) =>
    state.groups.items.find((item) => item.id === contact.group)
  );
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const { pathname } = useLocation();
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "auto",
    });
  }, [pathname]); // baraye inke scroll har safhe joda bashad.

  useEffect(() => {
    dispatch(changePath(false));
  }, []);

  useEffect(() => {
    console.log(docHeight);
    dispatch(HeightCalculation(docHeight + 300));
  }, [docHeight]);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setDocHeight(node.getBoundingClientRect().height);
    }
  }, []);

  if (typeof contact === "undefined") {
    return (
      <Typography variant="h4" textAlign={"center"}>
        در حال بارگیری ...
      </Typography>
    );
  } else {
    return (
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: { xs: "98%", sm: "70%", md: 850, lg: 1100 },
          m: "0 auto",
          mt: { xs: 12, md: 13 },
        }}
      >
        <div ref={measuredRef}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              fontSize: { xs: 19, md: 27 },
              mt: { xs: 0, md: 1 },
              mb: { xs: 1, md: 5 },
            }}
            color={isDark ? darkblue : amber}
            textAlign="center"
          >
            اطلاعات مخاطب
          </Typography>
          <Card
            sx={{
              boxShadow: isDark
                ? "0 15px 35px rgba(0,0,0,.35)"
                : "0 12px 30px rgba(0,0,0,.08)",
              padding: { xs: "16px 0 16px 0", md: "16px 0 16px 10px" },
              borderRadius: "20px",
              // height: { sm: 390, lg: 410 },
              mb: "10px !important",
              backgroundColor: isDark ? liver : "#fff",
            }}
          >
            <Grid container spacing={3}>
              <Grid xs={12} md={3.7}>
                {contact.photo ? (
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 150, sm: 200, md: 200, lg: 220 },
                      height: { xs: 150, sm: 200, md: "auto" },
                      objectFit: "fill",
                      borderRadius: { xs: "50%", md: 2, lg: 4 },
                      margin: {
                        xs: "0 auto",
                        md: "0 0 0 50px",
                      },
                      mt: { md: 3 },
                    }}
                    image={contact.photo}
                    alt="Live from space album cover"
                  />
                ) : (
                  <Person
                    sx={{
                      color: isDark ? darkblue : amber,
                      width: { xs: 150, sm: 200, md: 200, lg: 220 },
                      height: { xs: 150, sm: 200, md: "auto" },
                      objectFit: "fill",
                      borderRadius: { xs: "50%", md: 2, lg: 4 },
                      margin: {
                        xs: "0 auto",
                        md: "0 0 0 50px",
                      },
                      mt: { md: 3 },
                    }}
                  />
                )}
              </Grid>
              <Grid
                xs={12}
                md={8.3}
                sx={{ display: "flex", flexDirection: "column", pr: 1.9 }}
              >
                <CardContent
                  sx={{
                    border: isDark
                      ? "1px solid rgba(255,255,255,.12)"
                      : "1px solid #fff",
                    borderRadius: 2,
                    mt: { xs: 0, md: 2 },
                    backgroundColor: isDark ? grey[900] : "#fff",
                    "&.MuiCardContent-root": {
                      paddingBottom: { xs: 0.2, md: "12px" },
                    },
                  }}
                >
                  <Typography
                    p={1.4}
                    pt={0}
                    variant="body1"
                    display="flex"
                    flexDirection={"column"}
                    noWrap
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: isDark ? "rgba(255,255,255,.72)" : "#555",
                        fontSize: { xs: 13, sm: 14, md: 16 },
                      }}
                    >
                      <Person
                        sx={{
                          color: isDark ? darkblue : amber,
                          fontSize: { xs: 15, sm: 19, md: 24 },
                        }}
                      />
                      نام و نام خانوادگی &nbsp;{" "}
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }}
                    >
                      {contact.fullname}
                    </Typography>
                  </Typography>
                  <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
                  <Typography
                    p={1.4}
                    variant="body1"
                    fontWeight={"bold"}
                    display="flex"
                    flexDirection={"column"}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: isDark ? "rgba(255,255,255,.72)" : "#555",
                        fontSize: { xs: 13, sm: 14, md: 16 },
                      }}
                      fontWeight={"normal"}
                    >
                      <Phone
                        sx={{
                          color: isDark ? darkblue : amber,
                          fontSize: { xs: 15, sm: 19, md: 24 },
                        }}
                      />
                      شماره موبایل &nbsp;{" "}
                    </Typography>{" "}
                    <Typography
                      fontWeight="bold"
                      sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }}
                    >
                      {contact.mobile}
                    </Typography>
                  </Typography>
                  <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
                  <Typography
                    p={1.4}
                    pb={1.4}
                    variant="body1"
                    display="flex"
                    flexDirection={"column"}
                    flexWrap="wrap"
                    noWrap
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: isDark ? "rgba(255,255,255,.72)" : "#555",
                        fontSize: { xs: 13, sm: 14, md: 16 },
                      }}
                    >
                      <Email
                        sx={{
                          color: isDark ? darkblue : amber,
                          fontSize: { xs: 14, sm: 18, md: 24 },
                        }}
                      />
                      آدرس ایمیل &nbsp;{" "}
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      //sx={{ wordBreak: "break-all" }}
                      sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }}
                    >
                      {contact.email}
                    </Typography>
                  </Typography>
                  <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
                  <Typography
                    p={1.4}
                    pb={1.4}
                    variant="body1"
                    display="flex"
                    flexDirection={"column"}
                    flexWrap="wrap"
                    noWrap
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: isDark ? "rgba(255,255,255,.72)" : "#555",
                        fontSize: { xs: 13, sm: 14, md: 16 },
                      }}
                    >
                      {" "}
                      <Engineering
                        sx={{
                          color: isDark ? darkblue : amber,
                          fontSize: { xs: 15, sm: 19, md: 24 },
                        }}
                      />
                      شغل &nbsp;{" "}
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }}
                    >
                      {contact.job}
                    </Typography>
                  </Typography>
                  <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
                  <Typography
                    p={1.4}
                    pb={0}
                    variant="body1"
                    fontWeight={"bold"}
                    display="flex"
                    flexDirection={"column"}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: isDark ? "rgba(255,255,255,.72)" : "#555",
                        fontSize: { xs: 13, sm: 14, md: 16 },
                      }}
                      fontWeight={"normal"}
                    >
                      <Group
                        sx={{
                          color: isDark ? darkblue : amber,
                          fontSize: { xs: 15, sm: 19, md: 24 },
                        }}
                      />
                      گروه &nbsp;{" "}
                    </Typography>{" "}
                    <Typography
                      fontWeight="bold"
                      sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }}
                    >
                      {group.name}
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid xs={12} mb={2} mt={3}>
              <CusLink
                fs={{ xs: 15, sm: 16, md: 20 }}
                fw="normal"
                w={{ xs: "80%", md: 310 }}
                px="3vw"
                to={"/"}
                m={{ xs: "0 auto 0 auto", md: "32px auto 0 auto" }}
                bcolor={isDark ? darkblue : amber}
              >
                برگشت به صفحه اصلی
              </CusLink>
            </Grid>
          </Card>
        </div>
      </Box>
    );
  }
};

export default ViewContact;
