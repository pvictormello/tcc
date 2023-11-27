import { IUser } from "@/types";
import { formatDateTime } from "@/utils";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { t } from "i18next";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      fontWeight: 400,
    },
    {
      src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      fontWeight: 500,
    },
    {
      src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: 600,
    },
    {
      src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 36,
    color: "rgb(15 23 42)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "2px",
    borderBottom: "1px solid black",
    fontSize: "8px",
  },
  footer: {
    paddingTop: "2px",
    borderTop: "1px solid black",
    fontSize: "8px",
  },
  section: {
    flexGrow: 1,
    marginTop: "32px",
  },
  item: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "2px solid #94a3b8",
  },
  title: {
    marginTop: "16px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  text: {
    marginTop: "8px",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "10px",
    borderBottom: "1px dashed #94a3b8",
  },
  label: {
    fontWeight: "medium",
  },
});

const ReportAll = ({ users }: { users: IUser[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} fixed>
        <Text>Banco de Germoplasma de Capsicum.</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>

      <Text style={styles.title}>{t("User report")}</Text>

      <View style={styles.section}>
        {users.map((user, index) => (
          <View style={[styles.item, { ...(index === 0 && { borderTop: "none" }) }]}>
            <View style={[styles.text, { marginTop: "0px" }]}>
              <Text style={styles.label}>{t("Full name")}</Text>
              <Text>{user.name}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Email")}</Text>
              <Text>{user.email}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("City")}</Text>
              <Text>{user.city}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("State")}</Text>
              <Text>{user.state}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Country")}</Text>
              <Text>{user.country}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Workspace")}</Text>
              <Text>{user.location}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Role")}</Text>
              <Text>{user.role}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer} fixed>
        <Text>
          {t("Report generated in:")} {formatDateTime(new Date())}
        </Text>
      </View>
    </Page>
  </Document>
);

export default ReportAll;
