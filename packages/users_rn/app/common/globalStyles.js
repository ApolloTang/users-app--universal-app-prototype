import { StyleSheet } from 'react-native';

const styles = {
  titleStyle: {
    fontSize: 25,
    textAlign: 'center',
  },
  subtitleStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorStyle: {
    color: 'red',
    textAlign: 'center',
  },
  sectionStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 10,
    padding: 5,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 28,
    flex: 3,
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 5,
    flex: 1,
  },
};

export default StyleSheet.create(styles);
