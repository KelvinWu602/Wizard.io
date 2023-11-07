package handlers

type SigninRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type SigninResponse struct {
	Skill1     string `json:"skill1"`
	Skill2     string `json:"skill2"`
	Skill3     string `json:"skill3"`
	RecurSkill string `json:"recurSkill"`
}
