import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#f1f1f1"
    },
    header: {
        backgroundColor: "#ffb90c",
        padding: 4,
        paddingLeft: 10,
        zIndex: 10,
        paddingTop: 1,
    },
    logo:{
        width: 130,
        height: 35,
        
    },
    betRow:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input:{
        borderWidth: 2,
        borderColor: "#444",
        width: "30%",
        borderRadius: 10,
        backgroundColor: "#f1f1f1",
        height: "100%",
        paddingLeft: 4,
        fontSize: 12
    },
    result:{
        width: "15%",
        justifyContent: "center"
    },
    calcBox:{
        backgroundColor: "#f1f1f1",
    },
    title:{
        backgroundColor: "#444",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        alignItems: "center"
    },
    body: {
        display: "flex",
        color: "#333"
      },
  
      tables: {
          display:"flex",
          height: "100%",
          marginTop: 20
      },

      listContext:{
        width: "100%",
        height: "60%",
        marginTop: 1
      },

      listHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        
      },
      card: {
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        padding: 15,
        width: '95%',
        marginVertical: 10,
        marginHorizontal: 10
      },
      shadowProp: {
        shadowColor: '#171717',
        elevation: 5
      },
      calcBetList: {
        marginTop: 8,
      },
      betListRow:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }
  });

  export default styles