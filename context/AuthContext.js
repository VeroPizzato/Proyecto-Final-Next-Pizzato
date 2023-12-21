"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { auth, db, provider } from "@/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const router = useRouter()

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const agregarRol = async (email) => {
        if (email != "verizzato@gmail.com") {
            const docRef = doc(db, "roles", email)
            return setDoc(docRef, {
                rol: "no_admin",
                email: email
            }).then(() => console.log("Rol creado exitosamente"))
        }
    }

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        agregarRol(values.email)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
        agregarRol(auth.currentUser.email)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "roles", user.email)
                const userDoc = await getDoc(docRef)

                if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })
                }
                else {
                    router.push("/unauthorized")
                    logout()
                }
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}