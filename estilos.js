import { Dimensions, StyleSheet } from 'react-native';

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 10
  },

  itemTabela: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 3,
    paddingHorizontal: 10,
  },

  posicao: {
    backgroundColor: '#60a480',
    width: 36,
    height: 36,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  nome: {
    backgroundColor: '#587fb3',
    width: larguraTela - 56,
    height: 36,
    color: 'white',
    textAlignVertical: 'center',
    paddingLeft: 12
  }
});

export default estilos;