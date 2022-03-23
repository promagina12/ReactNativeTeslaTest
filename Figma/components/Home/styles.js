import { StyleSheet } from "react-native";
import color from '../../assets/colors/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  titlesSubtitle: {
      fontFamily: "Montserrat-Regular",
      fontSize: 16,
      color: color.textDark,
  },

  titlesTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      color: color.textDark,
      marginTop: 5,
  },

  searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 30,
  },

  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: color.textLight,
    borderBottomWidth: 2,
  },

  searchText: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
      marginBottom: 5,
      color: color.textLight,
  },

  categoriesWrapper: {
    marginTop: 30,
  },

  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },

  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryItemWrapper: {
    marginRight: 20, 
    borderRadius: 20,
  },

  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20
  },

  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },

  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },

  categorySelectIcon: {
    alignSelf: 'center'
  },

  popularWrapper: {
    paddingHorizontal: 20,
  },

  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },

  popularCardWrapper: {
    backgroundColor: color.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },

  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  }
});

export default styles;
