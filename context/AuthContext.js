"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { auth, db, provider } from "@/firebase/config"
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const router = useRouter()

    const [user, setUser] = useState({
        logged: false,
        nombre: null,
        email: null,
        uid: null
    })

    const agregarRol = async (nombre, email) => {
        if (email != "admin@coder.com") {
            const docRef = doc(db, "roles", email)
            return setDoc(docRef, {
                rol: "no_admin",
                nombre: nombre,
                email: email
            }).then(() => console.log("Rol no admin creado exitosamente"))
        }
        else {
            const docRef = doc(db, "roles", email)
            return setDoc(docRef, {
                rol: "admin",
                nombre: nombre,
                email: email
            }).then(() => console.log("Rol admin creado exitosamente"))
        }
    }

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((credencialUsuario) => {
                agregarRol(values.nombre, values.email)
                const user = credencialUsuario.user;
                updateProfile(user, {
                    displayName: values.nombre
                });                
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error en la registracion',
                    icon: 'warning',
                    confirmButtonColor: '#a52a2a',
                    confirmButtonText: 'Aceptar',
                })
            });
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(() => {
                Swal.fire({
                    title: 'Usuario inexistente o contraseña incorrecta',
                    icon: 'warning',
                    confirmButtonColor: '#a52a2a',
                    confirmButtonText: 'Aceptar',
                })
            })
    }

    const logout = async () => {
        await signOut(auth)
        router.push("/admin")
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
            .then(() => {
                agregarRol(auth.currentUser.email)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {               
                setUser({
                    logged: true,
                    nombre: user.displayName,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
                logout()
            }
        })
    }, [router])

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