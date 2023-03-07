/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserDto {
  _id: string
  email: string
  role: string
  firstname?: string
}

export interface CreateUserDto {
  email: string
  password: string
  role: string
  firstname?: string
}

export interface UpdateUserDto {
  _id: string
  email?: string
  role?: string
  firstname?: string
}

export interface LoginDataDto {
  email: string
  password: string
}

export interface CreateCategoryDto {
  name: string
  description?: string
}

export interface CategoryDto {
  _id: string
  name: string
  description?: string
}

export interface UpdateCategoryDto {
  _id: string
  name?: string
  description?: string
}

export interface ProjectDto {
  _id: string
  title: string
  alias: string
  previewImage?: string
  heroImage?: string
  description?: string
  content?: object
  category?: object
}

export interface ListProjectDto {
  total: number
  projects: ProjectDto[]
}

export interface PopulatedProjectDto {
  _id: string
  title: string
  alias: string
  previewImage?: string
  heroImage?: string
  description?: string
  content?: object
  category?: object
}

export interface CreateProjectDto {
  title: string
  alias: string
  previewImage?: string
  heroImage?: string
  description?: string
  content?: object
  category?: string
}

export interface UpdateProjectDto {
  _id: string
  title?: string
  alias?: string
  previewImage?: string
  heroImage?: string
  description?: string
  content?: object
  category?: string
}

export interface PreferencesDto {
  _id: string
  mainImage: string
  aboutImage: string
  aboutContent: object
  description: string
}

export type SampleDto = object
