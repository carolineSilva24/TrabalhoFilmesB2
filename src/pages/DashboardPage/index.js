import { StyleSheet, Text, View } from "react-native";

export default function DashboardPage() {
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Essa é a página do Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FFFA'
    },
    text: {
     textAlign: "center",
     fontSize: 22,
     fontWeight: 'bold',
    }
})
