import PersonalCardInfoSection from "../PersonalCardInfoSection/PersonalCardInfoSection.jsx";
import "./PersonalCard.css";
const PersonalCard = ({personalInfo}) => {
  //console.log(usersInfo[0])
  //console.log("cards", props);
  const {
    userAge,
    userGender,
    userName,
    userLastname,
    userProfilePhoto,
    userJob,
  } = personalInfo;

  console.log("userAge", userAge);

  return (
    <div
      className="card-container"
      style={{
        backgroundColor:
          userGender == "Erkek"
            ? "orangered"
            : userGender == "Kadın"
            ? "aqua"
            : "purple",
      }}
    >
      <div className="card-left">
        <img src={userProfilePhoto} alt="" />
      </div>

      <div className="card-right">
        <PersonalCardInfoSection
          sectionTitle={"İsim"}
          sectionValue={userName}
        />
        <PersonalCardInfoSection
          sectionTitle={"Soy İsim"}
          sectionValue={userLastname}
        />
        <PersonalCardInfoSection
          sectionTitle={"Yaşı :  "}
          sectionValue={userAge}
        />
        <PersonalCardInfoSection
          sectionTitle={"Cinsiyet :  "}
          sectionValue={userGender}
        />

        {userJob && (
          <PersonalCardInfoSection
            sectionTitle={"Mesleği :  "}
            sectionValue={userJob}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalCard;
