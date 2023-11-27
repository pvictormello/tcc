import { IAccess, IAccessImage, IReproductivePhase, ISeedlingPhase, IVegetativePhase } from "@/types";
import { formatDate, formatDateTime } from "@/utils";
import { Page, Text, Image, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
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
  title: {
    marginTop: "16px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  subtitle: {
    marginTop: "14px",
    fontSize: "14px",
    fontWeight: "medium",
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

const Report = ({
  access,
  seedlingPhase,
  vegetativePhase,
  reproductivePhase,
  images,
}: {
  access: IAccess;
  seedlingPhase: ISeedlingPhase;
  vegetativePhase: IVegetativePhase;
  reproductivePhase: IReproductivePhase;
  images: IAccessImage[];
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} fixed>
        <Text>Banco de Germoplasma de Capsicum.</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>

      <Text style={styles.title}>{t("Access report")}</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>{t("Collection location")}</Text>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Sample")}</Text>
          <Text>{access.sample ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Species")}</Text>
          <Text>{access.species ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Variety")}</Text>
          <Text>{access.variety ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Color")}</Text>
          <Text>{access.color ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Generation")}</Text>
          <Text>{access.generation ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Producer name")}</Text>
          <Text>{access.producer_name ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Geodetic coordinates")}</Text>
          <Text>{access.coordinates ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Reference location")}</Text>
          <Text>{access.location ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Contact phone")}</Text>
          <Text>{access.phone ?? "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Collection date")}</Text>
          <Text>{access.collection_date ? formatDate(new Date(access.collection_date)) : "-"}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>{t("Sample observation")}</Text>
          <Text>{access.observation ?? "-"}</Text>
        </View>

        <Text style={styles.subtitle}>{t("Seedling phase")}</Text>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod1")}</Text>
          {seedlingPhase.cod1 === 1 && <Text>{t("White")}</Text>}
          {seedlingPhase.cod1 === 2 && <Text>{t("Green")}</Text>}
          {seedlingPhase.cod1 === 3 && <Text>{t("Purple")}</Text>}
          {seedlingPhase.cod1 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod2")}</Text>
          <Text>
            {seedlingPhase.cod2 === 3 && <Text>{t("Sparse")}</Text>}
            {seedlingPhase.cod2 === 5 && <Text>{t("Intermediate")}</Text>}
            {seedlingPhase.cod2 === 7 && <Text>{t("Dense")}</Text>}
            {seedlingPhase.cod2 === null && <Text>-</Text>}
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod3")}</Text>
          <Text>
            {seedlingPhase.cod3 === 1 && <Text>{t("Light green")}</Text>}
            {seedlingPhase.cod3 === 2 && <Text>{t("Green")}</Text>}
            {seedlingPhase.cod3 === 3 && <Text>{t("Dark green")}</Text>}
            {seedlingPhase.cod3 === 4 && <Text>{t("Light purple")}</Text>}
            {seedlingPhase.cod3 === 5 && <Text>{t("Purple")}</Text>}
            {seedlingPhase.cod3 === 6 && <Text>{t("Dark purple")}</Text>}
            {seedlingPhase.cod3 === 7 && <Text>{t("Variegated")}</Text>}
            {seedlingPhase.cod3 === 8 && <Text>{t("Yellow")}</Text>}
            {seedlingPhase.cod3 === 9 && <Text>{t("Others")}</Text>}
            {seedlingPhase.cod3 === null && <Text>-</Text>}
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod4")}</Text>
          {seedlingPhase.cod4 === 1 && <Text>{t("Deltoid")}</Text>}
          {seedlingPhase.cod4 === 2 && <Text>{t("Ovate")}</Text>}
          {seedlingPhase.cod4 === 3 && <Text>{t("Lanceolate")}</Text>}
          {seedlingPhase.cod4 === 4 && <Text>{t("Elong-deltoid")}</Text>}
          {seedlingPhase.cod4 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod5")}</Text>
          <Text>{seedlingPhase.cod5 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod6")}</Text>
          <Text>{seedlingPhase.cod6 ?? "-"}</Text>
        </View>

        <Text style={styles.subtitle}>{t("Vegetative phase")}</Text>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod7")}</Text>
          {vegetativePhase.cod7 === 1 && <Text>{t("Annual")}</Text>}
          {vegetativePhase.cod7 === 2 && <Text>{t("Biennial")}</Text>}
          {vegetativePhase.cod7 === 3 && <Text>{t("Perennial")}</Text>}
          {vegetativePhase.cod7 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod8")}</Text>
          {vegetativePhase.cod8 === 1 && <Text>{t("Green")}</Text>}
          {vegetativePhase.cod8 === 2 && <Text>{t("Green with purple stripes")}</Text>}
          {vegetativePhase.cod8 === 3 && <Text>{t("Purple")}</Text>}
          {vegetativePhase.cod8 === 4 && <Text>{t("Others")}</Text>}
          {vegetativePhase.cod8 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod9")}</Text>
          {vegetativePhase.cod9 === 1 && <Text>{t("Green")}</Text>}
          {vegetativePhase.cod9 === 3 && <Text>{t("Light purple")}</Text>}
          {vegetativePhase.cod9 === 5 && <Text>{t("Purple")}</Text>}
          {vegetativePhase.cod9 === 7 && <Text>{t("Dark purple")}</Text>}
          {vegetativePhase.cod9 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod10")}</Text>
          {vegetativePhase.cod10 === 1 && <Text>{t("Cylindrical")}</Text>}
          {vegetativePhase.cod10 === 2 && <Text>{t("Angled")}</Text>}
          {vegetativePhase.cod10 === 3 && <Text>{t("Flattened")}</Text>}
          {vegetativePhase.cod10 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod11")}</Text>
          {vegetativePhase.cod11 === 3 && <Text>{t("Sparse")}</Text>}
          {vegetativePhase.cod11 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod11 === 7 && <Text>{t("Dense")}</Text>}
          {vegetativePhase.cod11 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod12")}</Text>
          {vegetativePhase.cod12 === 1 && <Text>{t("< 25")}</Text>}
          {vegetativePhase.cod12 === 2 && <Text>{t("25 - 45")}</Text>}
          {vegetativePhase.cod12 === 3 && <Text>{t("46 - 65")}</Text>}
          {vegetativePhase.cod12 === 4 && <Text>{t("66 - 85")}</Text>}
          {vegetativePhase.cod12 === 5 && <Text>{t("> 85")}</Text>}
          {vegetativePhase.cod12 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod13")}</Text>
          {vegetativePhase.cod13 === 3 && <Text>{t("Prostrate")}</Text>}
          {vegetativePhase.cod13 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod13 === 7 && <Text>{t("Erect")}</Text>}
          {vegetativePhase.cod13 === 9 && <Text>{t("Others")}</Text>}
          {vegetativePhase.cod13 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod14")}</Text>
          <Text>{vegetativePhase.cod14 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod15")}</Text>
          <Text>{vegetativePhase.cod15 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod16")}</Text>
          <Text>{vegetativePhase.cod16 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod17")}</Text>
          {vegetativePhase.cod17 === 3 && <Text>{t("Sparse")}</Text>}
          {vegetativePhase.cod17 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod17 === 7 && <Text>{t("Dense")}</Text>}
          {vegetativePhase.cod17 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod18")}</Text>
          {vegetativePhase.cod18 === 3 && <Text>{t("Sparse")}</Text>}
          {vegetativePhase.cod18 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod18 === 7 && <Text>{t("Dense")}</Text>}
          {vegetativePhase.cod18 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod19")}</Text>
          {vegetativePhase.cod19 === 3 && <Text>{t("Sparse")}</Text>}
          {vegetativePhase.cod19 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod19 === 7 && <Text>{t("Dense")}</Text>}
          {vegetativePhase.cod19 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod20")}</Text>
          {vegetativePhase.cod20 === 1 && <Text>{t("Yellow")}</Text>}
          {vegetativePhase.cod20 === 2 && <Text>{t("Light green")}</Text>}
          {vegetativePhase.cod20 === 3 && <Text>{t("Green")}</Text>}
          {vegetativePhase.cod20 === 4 && <Text>{t("Dark green")}</Text>}
          {vegetativePhase.cod20 === 5 && <Text>{t("Light purple")}</Text>}
          {vegetativePhase.cod20 === 6 && <Text>{t("Purple")}</Text>}
          {vegetativePhase.cod20 === 7 && <Text>{t("Variegated")}</Text>}
          {vegetativePhase.cod20 === 8 && <Text>{t("Others")}</Text>}
          {vegetativePhase.cod20 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod21")}</Text>
          {vegetativePhase.cod21 === 1 && <Text>{t("Deltoid")}</Text>}
          {vegetativePhase.cod21 === 2 && <Text>{t("Ovate")}</Text>}
          {vegetativePhase.cod21 === 3 && <Text>{t("Lanceolate")}</Text>}
          {vegetativePhase.cod21 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod22")}</Text>
          {vegetativePhase.cod22 === 1 && <Text>{t("Entire")}</Text>}
          {vegetativePhase.cod22 === 2 && <Text>{t("Ondulate")}</Text>}
          {vegetativePhase.cod22 === 3 && <Text>{t("Ciliate")}</Text>}
          {vegetativePhase.cod22 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod23")}</Text>
          {vegetativePhase.cod23 === 3 && <Text>{t("Sparse")}</Text>}
          {vegetativePhase.cod23 === 5 && <Text>{t("Intermediate")}</Text>}
          {vegetativePhase.cod23 === 7 && <Text>{t("Dense")}</Text>}
          {vegetativePhase.cod23 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod24")}</Text>
          <Text>{vegetativePhase.cod24 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod25")}</Text>
          <Text>{vegetativePhase.cod25 ?? "-"}</Text>
        </View>

        <Text style={styles.subtitle}>{t("Reproductive phase")}</Text>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod26")}</Text>
          <Text>{reproductivePhase.cod26 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod27")}</Text>
          {reproductivePhase.cod27 === 1 && <Text>{t("One")}</Text>}

          {reproductivePhase.cod27 === 2 && <Text>{t("Two")}</Text>}

          {reproductivePhase.cod27 === 3 && <Text>{t("Three or more")}</Text>}

          {reproductivePhase.cod27 === 4 && <Text>{t("Many flowers in bunches but each in inTextidual axile")}</Text>}

          {reproductivePhase.cod27 === 5 && <Text>{t("Other cultivars with two flowers in the first axile")}</Text>}

          {reproductivePhase.cod27 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod28")}</Text>
          {reproductivePhase.cod28 === 3 && <Text>{t("Pendant")}</Text>}

          {reproductivePhase.cod28 === 5 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod28 === 7 && <Text>{t("Erect")}</Text>}

          {reproductivePhase.cod28 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod29")}</Text>
          {reproductivePhase.cod29 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod29 === 2 && <Text>{t("Light green")}</Text>}

          {reproductivePhase.cod29 === 3 && <Text>{t("Yellow")}</Text>}

          {reproductivePhase.cod29 === 4 && <Text>{t("Yellow-green")}</Text>}

          {reproductivePhase.cod29 === 5 && <Text>{t("Purple with white base")}</Text>}

          {reproductivePhase.cod29 === 6 && <Text>{t("White with purple base")}</Text>}

          {reproductivePhase.cod29 === 7 && <Text>{t("White with purple margin")}</Text>}

          {reproductivePhase.cod29 === 8 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod29 === 9 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod29 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod30")}</Text>
          {reproductivePhase.cod30 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod30 === 2 && <Text>{t("Yellow")}</Text>}

          {reproductivePhase.cod30 === 3 && <Text>{t("Yellow-green")}</Text>}

          {reproductivePhase.cod30 === 4 && <Text>{t("Green")}</Text>}

          {reproductivePhase.cod30 === 5 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod30 === 6 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod30 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod31")}</Text>
          {reproductivePhase.cod31 === 1 && <Text>{t("Rotate")}</Text>}

          {reproductivePhase.cod31 === 2 && <Text>{t("Campanulate")}</Text>}

          {reproductivePhase.cod31 === 3 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod31 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod32")}</Text>
          {reproductivePhase.cod32 === 1 && <Text>{t("< 15")}</Text>}

          {reproductivePhase.cod32 === 2 && <Text>{t("15 - 25")}</Text>}

          {reproductivePhase.cod32 === 3 && <Text>{t("> 25")}</Text>}

          {reproductivePhase.cod32 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod33")}</Text>
          {reproductivePhase.cod33 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod33 === 2 && <Text>{t("Yellow")}</Text>}

          {reproductivePhase.cod33 === 3 && <Text>{t("Pale blue")}</Text>}

          {reproductivePhase.cod33 === 4 && <Text>{t("Blue")}</Text>}

          {reproductivePhase.cod33 === 5 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod33 === 6 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod33 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod35")}</Text>
          {reproductivePhase.cod35 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod35 === 2 && <Text>{t("Yellow")}</Text>}

          {reproductivePhase.cod35 === 3 && <Text>{t("Green")}</Text>}

          {reproductivePhase.cod35 === 4 && <Text>{t("Blue")}</Text>}

          {reproductivePhase.cod35 === 5 && <Text>{t("Light purple")}</Text>}

          {reproductivePhase.cod35 === 6 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod35 === 7 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod35 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod34")}</Text>
          <Text>{reproductivePhase.cod34 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod36")}</Text>
          <Text>{reproductivePhase.cod36 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod37")}</Text>
          {reproductivePhase.cod37 === 3 && <Text>{t("Inserted")}</Text>}

          {reproductivePhase.cod37 === 5 && <Text>{t("Same level")}</Text>}

          {reproductivePhase.cod37 === 7 && <Text>{t("Exserted")}</Text>}

          {reproductivePhase.cod37 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod38")}</Text>
          {reproductivePhase.cod38 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod38 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod38 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod39")}</Text>
          {reproductivePhase.cod39 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod39 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod39 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod40")}</Text>
          {reproductivePhase.cod40 === 1 && <Text>{t("Whole")}</Text>}

          {reproductivePhase.cod40 === 2 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod40 === 3 && <Text>{t("Dentate")}</Text>}

          {reproductivePhase.cod40 === 4 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod40 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod41")}</Text>
          {reproductivePhase.cod41 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod41 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod41 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod42")}</Text>
          <Text>{reproductivePhase.cod42 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod46")}</Text>
          <Text>{reproductivePhase.cod46 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod43")}</Text>
          {reproductivePhase.cod43 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod43 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod43 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod45")}</Text>
          {reproductivePhase.cod45 === 3 && <Text>{t("Low")}</Text>}

          {reproductivePhase.cod45 === 5 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod45 === 7 && <Text>{t("High")}</Text>}

          {reproductivePhase.cod45 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod44")}</Text>
          {reproductivePhase.cod44 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod44 === 2 && <Text>{t("Yellow")}</Text>}

          {reproductivePhase.cod44 === 3 && <Text>{t("Green")}</Text>}

          {reproductivePhase.cod44 === 4 && <Text>{t("Orange")}</Text>}

          {reproductivePhase.cod44 === 5 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod44 === 6 && <Text>{t("Dark purple")}</Text>}

          {reproductivePhase.cod44 === 7 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod44 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod47")}</Text>
          {reproductivePhase.cod47 === 1 && <Text>{t("White")}</Text>}

          {reproductivePhase.cod47 === 2 && <Text>{t("Lemon-yellow")}</Text>}

          {reproductivePhase.cod47 === 3 && <Text>{t("Pale orange-yellow")}</Text>}

          {reproductivePhase.cod47 === 4 && <Text>{t("Orange-yellow")}</Text>}

          {reproductivePhase.cod47 === 5 && <Text>{t("Pale orange")}</Text>}

          {reproductivePhase.cod47 === 6 && <Text>{t("Orange")}</Text>}

          {reproductivePhase.cod47 === 7 && <Text>{t("Light red")}</Text>}

          {reproductivePhase.cod47 === 8 && <Text>{t("Red")}</Text>}

          {reproductivePhase.cod47 === 9 && <Text>{t("Dark red")}</Text>}

          {reproductivePhase.cod47 === 10 && <Text>{t("Purple")}</Text>}

          {reproductivePhase.cod47 === 11 && <Text>{t("Brown")}</Text>}

          {reproductivePhase.cod47 === 12 && <Text>{t("Black")}</Text>}

          {reproductivePhase.cod47 === 13 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod47 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod48")}</Text>
          {reproductivePhase.cod48 === 1 && <Text>{t("Elongate")}</Text>}

          {reproductivePhase.cod48 === 2 && <Text>{t("Almost round")}</Text>}

          {reproductivePhase.cod48 === 3 && <Text>{t("Triangular")}</Text>}

          {reproductivePhase.cod48 === 4 && <Text>{t("Campanulate")}</Text>}

          {reproductivePhase.cod48 === 5 && <Text>{t("Block")}</Text>}

          {reproductivePhase.cod48 === 6 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod48 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod49")}</Text>
          <Text>{reproductivePhase.cod49 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod50")}</Text>
          <Text>{reproductivePhase.cod50 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod51")}</Text>
          <Text>{reproductivePhase.cod51 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod52")}</Text>
          <Text>{reproductivePhase.cod52 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod53")}</Text>
          <Text>{reproductivePhase.cod53 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod54")}</Text>
          {reproductivePhase.cod54 === 1 && <Text>{t("Acute")}</Text>}

          {reproductivePhase.cod54 === 2 && <Text>{t("Obtuse")}</Text>}

          {reproductivePhase.cod54 === 3 && <Text>{t("Truncate")}</Text>}

          {reproductivePhase.cod54 === 4 && <Text>{t("Cordate")}</Text>}

          {reproductivePhase.cod54 === 5 && <Text>{t("Lobate")}</Text>}

          {reproductivePhase.cod54 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod55")}</Text>
          {reproductivePhase.cod55 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod55 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod55 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod56")}</Text>
          {reproductivePhase.cod56 === 1 && <Text>{t("Pointed")}</Text>}

          {reproductivePhase.cod56 === 2 && <Text>{t("Blunt")}</Text>}

          {reproductivePhase.cod56 === 3 && <Text>{t("Sunken")}</Text>}

          {reproductivePhase.cod56 === 4 && <Text>{t("Sunken and pointed")}</Text>}

          {reproductivePhase.cod56 === 5 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod56 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod57")}</Text>
          {reproductivePhase.cod57 === 1 && <Text>{t("Absent")}</Text>}

          {reproductivePhase.cod57 === 2 && <Text>{t("Present")}</Text>}

          {reproductivePhase.cod57 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod58")}</Text>
          {reproductivePhase.cod58 === 3 && <Text>{t("Slightly corrugated")}</Text>}

          {reproductivePhase.cod58 === 5 && <Text>{t("Corrugated")}</Text>}

          {reproductivePhase.cod58 === 7 && <Text>{t("Smooth")}</Text>}

          {reproductivePhase.cod58 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod59")}</Text>
          <Text>{reproductivePhase.cod59 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod60")}</Text>
          {reproductivePhase.cod60 === 1 && <Text>{t("Smooth")}</Text>}

          {reproductivePhase.cod60 === 2 && <Text>{t("Semiwrinkled")}</Text>}

          {reproductivePhase.cod60 === 3 && <Text>{t("Wrinkled")}</Text>}

          {reproductivePhase.cod60 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod63")}</Text>
          {reproductivePhase.cod63 === 1 && <Text>{t("< 1/4 fruit length")}</Text>}

          {reproductivePhase.cod63 === 2 && <Text>{t("1/4 - 1/2 fruit length")}</Text>}

          {reproductivePhase.cod63 === 3 && <Text>{t("1/2 fruit length")}</Text>}

          {reproductivePhase.cod63 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod61")}</Text>
          {reproductivePhase.cod61 === 3 && <Text>{t("Slight")}</Text>}

          {reproductivePhase.cod61 === 5 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod61 === 7 && <Text>{t("Persistent")}</Text>}

          {reproductivePhase.cod61 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod62")}</Text>
          {reproductivePhase.cod62 === 3 && <Text>{t("Slight")}</Text>}

          {reproductivePhase.cod62 === 5 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod62 === 7 && <Text>{t("Persistent")}</Text>}

          {reproductivePhase.cod62 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod64")}</Text>
          {reproductivePhase.cod64 === 3 && <Text>{t("Light")}</Text>}

          {reproductivePhase.cod64 === 5 && <Text>{t("Medium")}</Text>}

          {reproductivePhase.cod64 === 7 && <Text>{t("Serious")}</Text>}

          {reproductivePhase.cod64 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod65")}</Text>
          {reproductivePhase.cod65 === 1 && <Text>{t("Dark yellow")}</Text>}

          {reproductivePhase.cod65 === 2 && <Text>{t("Brown")}</Text>}

          {reproductivePhase.cod65 === 3 && <Text>{t("Black")}</Text>}

          {reproductivePhase.cod65 === 4 && <Text>{t("Others")}</Text>}

          {reproductivePhase.cod65 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod66")}</Text>
          {reproductivePhase.cod66 === 1 && <Text>{t("Smooth")}</Text>}

          {reproductivePhase.cod66 === 2 && <Text>{t("Rough")}</Text>}

          {reproductivePhase.cod66 === 3 && <Text>{t("Wrinkled")}</Text>}

          {reproductivePhase.cod66 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod67")}</Text>
          {reproductivePhase.cod67 === 3 && <Text>{t("Small")}</Text>}

          {reproductivePhase.cod67 === 5 && <Text>{t("Intermediate")}</Text>}

          {reproductivePhase.cod67 === 7 && <Text>{t("Large")}</Text>}

          {reproductivePhase.cod67 === null && <Text>-</Text>}
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod68")}</Text>
          <Text>{reproductivePhase.cod68 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod69")}</Text>
          <Text>{reproductivePhase.cod69 ?? "-"}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>{t("cod70")}</Text>
          {reproductivePhase.cod70 === 1 && <Text>{t("< 20")}</Text>}

          {reproductivePhase.cod70 === 2 && <Text>{t("20 - 50")}</Text>}

          {reproductivePhase.cod70 === 3 && <Text>{t("> 20")}</Text>}

          {reproductivePhase.cod70 === null && <Text>-</Text>}
        </View>
      </View>

      <Text style={styles.subtitle}>{t("Images")}</Text>

      <View style={styles.footer} fixed>
        <Text>Relatório gerado em: {formatDateTime(new Date())}</Text>
      </View>
    </Page>
  </Document>
);

export default Report;
