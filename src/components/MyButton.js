import { StyleSheet, Text, Pressable } from "react-native";

export default function MyButton(props) { 
  function randomSong(){
    var words = ["Yellow", "purple", "green","Rock", 'Paper', 'Scissor']
    var word = words[Math.floor(Math.random()*words.length)]
    console.log("Random word is: " + word)
  }

  return (
    <Pressable style={styles.buttonStyle} onPress={randomSong}>
      <Text style={styles.textStyle}>{props.details}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})