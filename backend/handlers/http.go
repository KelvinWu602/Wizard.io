package handlers

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"path/filepath"
)

func readRequestBody(r *http.Request) ([]byte, error) {
	// Read the request body
	body, err := io.ReadAll(r.Body)
	if err != nil {
		return nil, errors.New("failed to read request body")
	}
	// Close the request body
	defer r.Body.Close()
	return body, nil
}

func LoadWebpage() http.Handler {
	dir, _ := filepath.Abs("../frontend/public")
	fs := http.FileServer(http.Dir(dir))
	return fs
}

func Signin(w http.ResponseWriter, r *http.Request) {
	body, err := readRequestBody(r)
	if err != nil {
		http.Error(w, "Failed to read request body", http.StatusBadRequest)
		return
	}
	var input SigninRequest
	if err := json.Unmarshal(body, &input); err != nil {
		http.Error(w, "Failed to read request body", http.StatusBadRequest)
		return
	}
	// Username and Password checking logics

	// If success, return the skill json specs of the player
	response := SigninResponse{
		Skill1:     "Skill1 Data",
		Skill2:     "Skill2 Data",
		Skill3:     "Skill3 Data",
		RecurSkill: "RecurSkill Data",
	}
	w.Header().Set("Content-Type", "application/json")
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Failed to encode JSON response", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
	if _, err := w.Write(jsonResponse); err != nil {
		http.Error(w, "Failed to encode JSON response", http.StatusInternalServerError)
	}
}

func Register(w http.ResponseWriter, r *http.Request) {

}
