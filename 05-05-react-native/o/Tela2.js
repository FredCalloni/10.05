import * as React from 'react';
import { View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function TelaA({ navigation }) {
  return (
         <View style={styles.container}>
         <ScrollView>
         <Text style={styles.texto}> Alarme                                         ⋮</Text>
         </ScrollView>
         <Text style={styles.text}>☀️ Acordar </Text>
         <button style={styles.butao}>05:30 <br /> seg., ter., qua., qui., sex.</button>
        <Text style={styles.text}>      Outros </Text>
         <br />
       <button style={styles.butaom}>05:45 <br /> Não programado </button>
       <br />
       <button style={styles.butaom}>05:50 <br /> Não programado</button>
       <br />
       <button style={styles.butaom}>07:00 <br /> Não programado </button>
       <br />
       <button style={styles.butaom}>07:30 <br /> Não programado </button>
       <br />
       <button style={styles.butaom}>08:00 <br /> Não programado</button>
       <br styles={styles.br} />

       <Image style={styles.imagem} source={{src: 'botaoazul' }} />
       <ScrollView>
       <Text style={styles.emotes}> ⏰     🕒        ⌛         ⏱️         🛏️  </Text>
       <Text style={styles.textoo}> Alarme  Relógio  Timer, Cronômetro  Dormir </Text>
       </ScrollView>
        </View>
  );
}



function TelaB({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView>
     <Text style={styles.dormes}> Cronômetro                                 ⋮</Text>
     </ScrollView>
     <button style={styles.hour}> 00h 00m </button>
      <br />
      <br />
      <br />
      <br />
      <br />
     <button style={styles.hourly}>►</button>
      <br />
      <br />
      <br />
      <ScrollView>
       <Text style={styles.emotes}> ⏰     🕒        ⌛         ⏱️         🛏️  </Text>
       <Text style={styles.texto}> Alarme  Relógio  Timer, Cronômetro  Dormir </Text>
       </ScrollView>
  </View>
    </View>
  );
}

function TelaC({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView>
     <Text style={styles.dormes}> Dormir                                        ⋮</Text>
     </ScrollView>
   <button style={styles.horario}>
      <Text style={styles.escrita}> Horário programado:</Text> <br />
      <Text style={styles.escritaTwo}>               DORMIR                       ACORDAR </Text> <br />
      <Text style={styles.hour}> 22:00 05:30</Text> <br />
      <Text style={styles.escritaTwo}>            7H 30min - Próximo alarme: quinta-feira</Text>
   </button>
   <br />
   <br />
   <button style={styles.horario}>
      <Text style={styles.escrita}> Ouvir sons para dormir </Text> <br />
      <Text style={styles.escritaThree}>Ouça músicas tranquilas para pegar no sono com mais facilidade. Os sons para dormir não são tocados automaticamente. </Text>
   </button>
   <br />
   <br />
      <ScrollView>
       <Text style={styles.emotes}> ⏰     🕒        ⌛         ⏱️         🛏️  </Text>
       <Text style={styles.texto}> Alarme  Relógio  Timer, Cronômetro  Dormir </Text>
       </ScrollView>
  </View>
  );
}

function TelaD({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView>
     <Text style={styles.dormes}> Relógio                                        ⋮</Text>
     </ScrollView>
   <button style={styles.horario}>
      <Text style={styles.hour}>10:30</Text> <br />
      <Text style={styles.escrita}>  seg., 24 de abr. ter., 05:30</Text>
   </button>
   <br />
   <br />
   <button style={styles.horarioTwo}>
   <text style={styles.escritaTwo}> Brasília‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</text>
   <text style={styles.hourTwo}> 10:30</text>
    </button>
       <br />
    <button style={styles.horarioTwo}>
      <text style={styles.escritaTwo}> Cassina de' Pecchi ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </text>
      <text style={styles.hourTwo}> 15:30 </text>
    </button>
    <br />
    <button style={styles.horarioTwo}>
      <text style={styles.escritaTwo}> Milano ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎</text>
      <text style={styles.hourTwo}> 15:30 </text>
   </button>
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   
      <ScrollView>
       <Text style={styles.emotes}> ⏰     🕒        ⌛         ⏱️         🛏️  </Text>
       <Text style={styles.texto}> Alarme  Relógio  Timer, Cronômetro  Dormir </Text>
       </ScrollView>
  </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TelaA">
        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="Telac" component={TelaC} />
        <Drawer.Screen name="Telac" component={TelaD} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
