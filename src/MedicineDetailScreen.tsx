import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

function MedicineDetailScreen({navigation}: {navigation: any}) {
  const [selectedTab, setSelectedTab] = useState('basic');
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.goBack}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>약 정보 자세히보기</Text>
          </View>

          <View style={styles.imageBox}>
            <Image
              source={require('./assets/medicineEx.png')}
              style={{width: 180, height: 180}}
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.selectBox}>
              <TouchableOpacity onPress={() => setSelectedTab('basic')}>
                <Text
                  style={[
                    styles.selectText,
                    selectedTab === 'basic' && styles.selectedText, // 선택된 경우 스타일 적용
                  ]}>
                  기본 정보
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedTab('sideEffect')}>
                <Text
                  style={[
                    styles.selectText,
                    selectedTab === 'sideEffect' && styles.selectedText, // 선택된 경우 스타일 적용
                  ]}>
                  부작용
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{height: 1, backgroundColor: '#d9d9d9', width: '100%'}}
            />
            <View style={styles.contentBox}>
              {selectedTab === 'basic' ? (
                <>
                  <Text style={styles.contentTitle}>약품명</Text>
                  <Text style={styles.contentText}>알레그라</Text>
                  <Text style={styles.contentTitle}>효능효과</Text>
                  <Text style={styles.contentText}>비염증상 완화</Text>
                  <Text style={styles.contentTitle}>복용법</Text>
                  <Text style={styles.contentText}>매일 3시간 간격으로</Text>
                </>
              ) : (
                <>
                  <Text style={styles.contentTitle}>부작용 직접 추가하기</Text>
                  <View style={styles.addBox}>
                    <TextInput
                      style={styles.sideEffectBar}
                      placeholder={'이곳을 눌러 추가하세요.'}
                    />

                    <TouchableOpacity style={styles.addBtn}>
                      <Text style={{color: 'white'}}>추가</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.contentTitle}>
                    내가 직접 추가한 부작용
                  </Text>
                  <Text style={styles.contentText}>잠이 와요</Text>
                  <Text style={styles.contentTitle}>기본 부작용</Text>
                  <Text style={styles.contentText}>힘들어요</Text>
                </>
              )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack: {
    fontSize: 30,
    color: '#0169CD',
    marginLeft: '28%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBox: {
    flex: 2,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 6,
  },
  selectBox: {
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B2B2B2',
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  contentBox: {marginHorizontal: '10%'},
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: '1%',
    marginTop: '15%',
  },
  contentText: {fontSize: 14, fontWeight: 'bold', color: '#A8A8A8'},
  addBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  sideEffectBar: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    width: '80%',
  },
  addBtn: {
    width: '18%',
    backgroundColor: '#0169CD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

export default MedicineDetailScreen;
