import { IAccess, IUser } from "@/types";
import { formatDate, formatDateTime } from "@/utils";
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
    marginBottom: "8px",
    borderBottom: "1px solid black",
    fontSize: "8px",
  },
  footer: {
    paddingTop: "2px",
    marginTop: "8px",
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

const ReportAll = ({ access }: { access: IAccess[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} fixed>
        <Text>Banco de Germoplasma de Capsicum.</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>

      <Text style={styles.title}>{t("User report")}</Text>

      <View style={styles.section}>
        {access.map((access, index) => (
          <View style={[styles.item, { ...(index === 0 && { borderTop: "none" }) }]}>
            <View style={[styles.text, { marginTop: "0px" }]}>
              <Text style={styles.label}>{t("Sample")}</Text>
              <Text>{access.sample}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Species")}</Text>
              <Text>{access.species}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Variety")}</Text>
              <Text>{access.variety}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Country")}</Text>
              <Text>{access.country}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Color")}</Text>
              <Text>{access.color}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Generation")}</Text>
              <Text>{access.generation}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Producer name")}</Text>
              <Text>{access.producer_name}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Geodetic coordinates")}</Text>
              <Text>{access.coordinates}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Location")}</Text>
              <Text>{access.location}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Contact phone")}</Text>
              <Text>{access.phone}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Collection date")}</Text>
              <Text>{formatDate(access.collection_date)}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Sample observation")}</Text>
              <Text>{access.observation}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.label}>{t("Created by")}</Text>
              <Text>{access.created_by.name}</Text>
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
