import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function SearchScreen({navigation}: {navigation: any}) {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>약 검색하기</Text>
          </View>

          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchBar}
              placeholder={' 약을 검색해보세요.'}
            />
          </View>

          <View style={styles.medicineContainer}>
            <View style={styles.medicineBox}>
              <View style={styles.imageBox}>
                <Text>이미지</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={{fontWeight: 'bold'}}>알레그라정</Text>
                <Text style={{marginTop: '1%', fontSize: 12}}>
                  비염증상 완화
                </Text>
              </View>
              <View style={styles.detailBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MedicineDetail')}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      marginBottom: '5%',
                      color: '#A8A8A8',
                    }}>
                    자세히보기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.tapContainer}>
            <View style={styles.tapBox}>
              <TouchableOpacity>
                <Image
                  source={require('./assets/home.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./assets/search.png')}
                  style={{width: 28, height: 28}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./assets/map.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./assets/tapmedicine.png')}
                  style={{width: 35, height: 35}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    height: '80%',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  medicineContainer: {
    flex: 10,
    alignItems: 'center',
  },
  medicineBox: {
    width: '90%',
    height: 70,
    backgroundColor: '#F2F8FF',
    marginVertical: '2%',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
  },
  imageBox: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    width: '45%',
    height: '100%',
    marginVertical: '2%',
  },
  detailBox: {
    width: '25%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  tapContainer: {
    position: 'absolute',
    bottom: '3%',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
    paddingVertical: 10,
  },
  tapBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default SearchScreen;
