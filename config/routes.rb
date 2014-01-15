FriendsApp::Application.routes.draw do
  resources :users do
    resources :circles
  end

  resource :session, :only => [:new, :create, :destroy]
end
