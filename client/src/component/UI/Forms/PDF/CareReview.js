import { getTodaysDate } from "../../../../util/Date";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: "25px" },
  header: { fontSize: "18px" },
  subHeader: { fontSize: "12px" },
  flex: {
    flexDirection: "row",
  },
  smFontSize: { fontSize: "10px" },
  medFontSize: { fontSize: "14px" },
  contentBreak: { marginTop: "25px" },
  mainView: {
    margin: "0 auto",
    width: "325px",
  },
});

export const CaregiverReviewPDF = (props) => {
  return (
    <Document
      title={`Review_${props.reviewInfo.reviewerName.last_name},${props.reviewInfo.reviewerName.first_name}`}
    >
      <Page size="A4" style={styles.page}>
        <View style={{ ...styles.mainView, ...styles.medFontSize }}>
          <View
            style={{
              ...styles.flex,
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderBottom: "1px solid #999",
            }}
          >
            <Text style={styles.header}>CAREGIVER REVIEW</Text>
            <Text style={{ fontSize: "12px", color: "#555" }}>
              {getTodaysDate()}
            </Text>
          </View>
          <Text
            style={{ ...styles.subHeader, color: "#555", paddingTop: "5px" }}
          >
            by{" "}
            {`${props.reviewInfo.reviewerName.first_name} ${props.reviewInfo.reviewerName.middle_name} ${props.reviewInfo.reviewerName.last_name}`}
          </Text>
          <View style={{ ...styles.smFontSize, color: "#888" }}>
            <Text>{props.reviewInfo.reviewerContact.contact_email}&nbsp;</Text>
            <Text>{props.reviewInfo.reviewerContact.contact_phone}&nbsp;</Text>
          </View>

          <View style={{ ...styles.contentBreak }}>
            <View style={styles.flex}>
              <Text>{props.reviewInfo.caregiverName.first_name}&nbsp;</Text>
              <Text>{props.reviewInfo.caregiverName.middle_name}&nbsp;</Text>
              <Text>{props.reviewInfo.caregiverName.last_name}</Text>
            </View>
            <Text style={{ ...styles.smFontSize, color: "#555" }}>
              Caregiver being reviewed
            </Text>
          </View>

          <View style={{ ...styles.contentBreak }}>
            <Text>{`${props.reviewInfo.startDate} - ${props.reviewInfo.endDate}`}</Text>
            <Text style={{ ...styles.smFontSize, color: "#555" }}>
              Service Duration
            </Text>
          </View>

          <View style={{ ...styles.contentBreak }}>
            <View style={styles.flex}>
              {props.reviewInfo.services.map((service) => (
                <Text key={service.value}>{service.label}&nbsp;</Text>
              ))}
            </View>
            <Text style={{ ...styles.smFontSize, color: "#555" }}>
              Services Caregiver Provided
            </Text>
          </View>

          <View style={{ ...styles.contentBreak }}>
            <Text style={styles.medFontSize}>Review</Text>
            <Text style={{ ...styles.smFontSize, color: "#555" }}>
              {props.reviewInfo.review}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
