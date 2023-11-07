package main

import (
	"net/http"

	"github.com/KelvinWu602/wizard.io/backend/handlers"
)

func setupHTTPEndpoints() {
	http.Handle("/", handlers.LoadWebpage())
	http.HandleFunc("/signin", handlers.Signin)
	http.HandleFunc("/register", handlers.Register)
}

func main() {
	setupHTTPEndpoints()
	http.ListenAndServe(":8080", nil)
}
